import { Router } from "express";
import { migrateData } from "../config/postgres.js";


const router = Router();

router.post('/migrate', async (req, res) => {
    try {
        const counters = await migrateData();
        res.status(200).json({
            message: 'Migración completada exitosamente',
            counters 
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error durante la migración',
            error: error.message
        });
    }
});

export default router;