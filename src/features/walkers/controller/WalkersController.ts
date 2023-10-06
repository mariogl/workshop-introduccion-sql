import { type Request, type Response } from "express";
import { type WalkerStructure } from "../types";

class WalkersController {
  public async getAll(req: Request, res: Response): Promise<void> {
    try {
      const walkers: WalkerStructure[] = [];

      res.status(200).json({ walkers });
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
      const walkerId = req.params.id;

      const walker = undefined;

      if (!walker) {
        res.status(404).json({ msg: "Walker not found" });
        return;
      }

      res.status(200).json({ walker });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server Error" });
    }
  }

  public async create(
    req: Request<
      Record<string, unknown>,
      Record<string, unknown>,
      WalkerStructure
    >,
    res: Response
  ): Promise<void> {
    try {
      const newWalker = req.body;

      res.status(201).json({ walker: newWalker });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server Error" });
    }
  }

  public async update(
    req: Request<
      Record<string, unknown>,
      Record<string, unknown>,
      WalkerStructure
    >,
    res: Response
  ): Promise<void> {
    try {
      const walker = req.body;

      if (!walker) {
        res.status(404).json({ msg: "Walker not found" });
        return;
      }

      res.status(200).json({ walker });
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
      const walkerId = req.params.id;

      const walker = undefined;

      if (!walker) {
        res.status(404).json({ msg: "Walker not found" });
        return;
      }

      res.status(200).json({ msg: "Walker deleted" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server Error" });
    }
  }
}

export default WalkersController;
