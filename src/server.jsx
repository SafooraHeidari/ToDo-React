import { createServer, Model } from "miragejs"

const toDoList = [
    {
        id: 1,
        category: 'uni',
        title: 'proposal',
        subTasks: ['abstract', 'main', 'conclusion'],
        deadLine: '2'
    },
    {
        id: 2,
        category: 'home',
        title: 'shopping',
        subTasks: ['milk', 'cheese', 'bread'],
        deadLine: '1'
    },
    {
        id: 3,
        category: 'work',
        title: 'i-shan',
        subTasks: ['admin', 'mentoring', 'bootcamp'],
        deadLine: '3'
    },
    {
        id: 4,
        category: 'uni',
        title: 'meeting',
        subTasks: ['dr1', 'dr2'],
        deadLine: '2'
    },
    {
        id: 5,
        category: 'uni',
        title: 'meeting',
        subTasks: ['dr1', 'dr2'],
        deadLine: '2'
    }];



const users = [{id: 1, name:"safoora", email:"heidari"},
    {id: 2, name:"fateme", email:"sahebi"},
    {id: 3, name:"alireza", email:"abbasi"},
    {id: 4, name:"majid", email:"heidari"},];


export function makeServer({ environment = "test" } = {}) {
    let server = createServer({
        environment,
        models: {
            user: Model,
        },
        seeds(server) {
            users.map(user => server.create("user", { id: user.id, name: user.name, email: user.email, todo: toDoList}))
        },
        routes() {
            this.namespace = "api"
            this.get("/users", (schema) => {
                return schema.users.all()
            })
        },
    })

    return server
}