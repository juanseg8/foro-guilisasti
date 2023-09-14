import { PublicationsModel } from "../models/Publications.js"




export const getPublications = async (req, res) => {
    try {
        const publications = await PublicationsModel.findAll()
        if (!publications) return res.status(404)
        return res.status(200).json(publications)
    } catch (eror) {
        console.log(eror);
        return res.status(500).json({
            message: "Error server"
        })
    }
}

export const createPublications = async (req, res) => {
    try {
        const newPublication = await PublicationsModel.create(req.body)
        return res.status(201).json(newPublication)
    } catch (eror) {
        return res.status(500).json({
            message: "Error server"
        })
    }
}

export const updatePublications = async (req, res) => {
    const { id } = req.params
    try {
        const publication = await PublicationsModel.findByPk(id)
        if(!publication){
            return res.status(404).json({
                message:"Publication not founded"
            })
        }
        publication.update(req.body)
        return res.status(200).json(publication)

    } catch (eror) {
        return res.status(500).json({
            message: "Error server"
        })
    }
}

export const deletePublications = async (req, res) => {
    const { id } = req.params
    try {
        const publicationdelated = await PublicationsModel.destroy({
            where: {
                id: id
            }
        })
        if (!publicationdelated) {
            return res.status(404).json({
                message: "Publication not found"
            })
        } return res.status(200).json({
            message: "Publication eliminated"
        })
    } catch (eror) {
        return res.status(500).json({
            message: "Error server"
        })
    }
}

