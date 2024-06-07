import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, ParseUUIDPipe } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { ApiCreatedResponse, ApiForbiddenResponse, ApiTags } from '@nestjs/swagger';


@ApiTags('tasks')
@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post('create')
  @ApiCreatedResponse({
    description: 'Se guardo correctamente.',
  })
  @ApiForbiddenResponse({ description: 'Forbidden.' })
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.tasksService.create(createTaskDto);
  }

  @Get()
  @ApiCreatedResponse({
    description: 'Busqueda Exitosa',
  })
  @ApiForbiddenResponse({ description: 'Forbidden.' })
  findAll() {
    return this.tasksService.findAll();
  }

  @Get(':id')
  @ApiCreatedResponse({
    description: 'Busqueda exitosa',
  })
  @ApiForbiddenResponse({ description: 'No se pudo encontrar una nota.' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.tasksService.findOne(id);
  }

  @Patch(':id')
  @ApiCreatedResponse({
    description: 'Actualizado correctamente',
  })
  @ApiForbiddenResponse({ description: 'error a la hora de actualizar' })
  update(@Param('id', ParseIntPipe) id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.tasksService.update(+id, updateTaskDto);
  }

  @Delete(':id')
  @ApiCreatedResponse({
    description: 'Eliminado correctamente.',
  })
  @ApiForbiddenResponse({ description: 'Error a la hora de eliminar' })
  remove(@Param('id') id: number) {
    return this.tasksService.remove(id);
  }
}
