import { User } from "src/auth/user.entity";
import { Repository } from "typeorm";
import { Board } from "./board.entity";
import { CreateBoardDto } from "./dto/create-board.dto";
import { UpdateBoardStatusDto } from "./dto/update-board-status.dto";
export declare class BoardRepository extends Repository<Board> {
    private logger;
    findOneById(id: number): Promise<Board>;
    findAllBoards(): Promise<Board[]>;
    findBoardsByUserId(userId: number): Promise<Board[]>;
    createBoard(createBoardDto: CreateBoardDto, user: User): Promise<Board>;
    deleteOneById(id: number, user: User): Promise<Board | void>;
    updateBoardStatusById(updateBoardStatusDto: UpdateBoardStatusDto): Promise<Board>;
}
