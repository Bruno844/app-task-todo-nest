
## Referencia de Endpoints

#### 1ºEndpoint

```http
  GET /api/tasks
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `get` | `string` |  trae todas las notas |

#### 2º Endpoint

```http
  GET /api/tasks/{id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string / number` | trae nota por id |


#### 3º Endpoint

```http
  POST /api/tasks/create
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `body`      | `string` | crea una nota |


#### 4º Endpoint

```http
  PUT /api/tasks/{id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string / number` | actualiza nota por id |


#### 5º Endpoint

```http
  DELETE /api/tasks/{id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string / number` | elimina nota por id |




