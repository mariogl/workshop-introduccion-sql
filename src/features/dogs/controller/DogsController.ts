import { type Request, type Response } from "express";
import { type DogStructure } from "../types";

class DogsController {
  public async getAll(req: Request, res: Response): Promise<void> {
    try {
      const dogs: DogStructure[] = [];

      res.status(200).json({ dogs });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server Error" });
    }
  }

  public async getById(
    req: Request<
      { id: string },
      Record<string, unknown>,
      Record<string, unknown>
    >,
    res: Response
  ): Promise<void> {
    try {
      const dogId = req.params.id;

      const dog = undefined;

      if (!dog) {
        res.status(404).json({ msg: "Dog not found" });
        return;
      }

      res.status(200).json({ dog });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server Error" });
    }
  }

  public async getAllByWalker(req: Request<{ id: string }>, res: Response) {
    try {
      const walker = req.params.id;

      const dogs = [];

      res.status(200).json({ dogs });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server Error" });
    }
  }

  public async create(
    req: Request<
      Record<string, unknown>,
      Record<string, unknown>,
      DogStructure
    >,
    res: Response
  ): Promise<void> {
    try {
      const newDog = req.body;

      res.status(201).json({ dog: newDog });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server Error" });
    }
  }

  public async update(
    req: Request<
      Record<string, unknown>,
      Record<string, unknown>,
      DogStructure
    >,
    res: Response
  ): Promise<void> {
    try {
      const dog = req.body;

      if (!dog) {
        res.status(404).json({ msg: "Dog not found" });
        return;
      }

      res.status(200).json({ dog });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server Error" });
    }
  }

  public async delete(
    req: Request<
      { id: string },
      Record<string, unknown>,
      Record<string, unknown>
    >,
    res: Response
  ): Promise<void> {
    try {
      const dogId = req.params.id;

      const dog = undefined;

      if (!dog) {
        res.status(404).json({ msg: "Dog not found" });
        return;
      }

      res.status(200).json({ msg: "Dog deleted" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server Error" });
    }
  }
}

export default DogsController;
