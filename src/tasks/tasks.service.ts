import { BadRequestException, HttpException, HttpStatus, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TasksService {

  constructor(

    //injectamos un repository para que lea el tipado de datos a almacenar
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>

  ) { }


  async create(createTaskDto: CreateTaskDto) {
    try {

      const task = this.taskRepository.create(createTaskDto);

      await this.taskRepository.save(task)

      return task


    } catch (error) {
      console.log(error)
      throw new InternalServerErrorException('error a la hora de guardar')
    }
  }

  async findAll() {
    try {

      const tasks = this.taskRepository.find()

      if(!tasks)
        throw new NotFoundException('no se pudieron traer las notas')


      return await tasks


    } catch (error) {
      console.log(error)
      throw new InternalServerErrorException('error en traer notas')
    }
  }

  async findOne(id: number) {
    try {

      const task = await this.taskRepository.findOne({
        where: { id: id }
      })

      if(!task) return new HttpException('no se encontro nota con ese id', HttpStatus.NOT_FOUND)

      return task


    } catch (error) {
      console.log(error)
      throw new InternalServerErrorException('error en traer notas')
    }
  }

  async update(id: number, updateTaskDto: UpdateTaskDto) {

    const {...data } = updateTaskDto

    try {
      const task = this.taskRepository.update({id}, data);

      
      if(!task)
      throw new NotFoundException('task with id not found');
      

      return task

        
    } catch (error) {
      console.log(error)
      throw new InternalServerErrorException('error al editar nota')
    }
  }

  async remove(id: number) {
    try {
      const task = await this.taskRepository.findOne({
        where: {id}
      })

      if (!task) {
        return new HttpException(`error al eliminar nota con id ${id}`, HttpStatus.INTERNAL_SERVER_ERROR)
      }

      return await this.taskRepository.delete({ id })

      

    } catch (error) {
      console.log(error)
      throw new InternalServerErrorException('error en traer notas')
    }
  }
}
