import express from "express";
import livroController from "../controllers/livrosController.js";


const router = express.Router();


router
 .get("/livros",livroController.listarLivros)
 .get("/livros/busca", livroController.listarLivroPorEditora)
 .get("/livros/:id",livroController.listarLivrosId)
 .post("/livros",livroController.cadastrarLivros)
 .put("/livros/:id",livroController.atualizarLivro)
 .delete("/livros/:id",livroController.excluirLivro)




 export default router;