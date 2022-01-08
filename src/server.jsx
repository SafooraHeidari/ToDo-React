import { createServer, Model } from "miragejs"

const toDoList = [
    {
        id: 1,
        category: 'uni',
        title: 'proposal',
        subTasks: ['abstract', 'main', 'conclusion'],
        deadLine: '2',
        done: false
    },
    {
        id: 2,
        category: 'home',
        title: 'shopping',
        subTasks: ['milk', 'cheese', 'bread'],
        deadLine: '1',
        done: false
    },
    {
        id: 3,
        category: 'work',
        title: 'i-shan',
        subTasks: ['admin', 'mentoring', 'bootcamp'],
        deadLine: '3',
        done: false
    },
    {
        id: 4,
        category: 'uni',
        title: 'meeting',
        subTasks: ['dr1', 'dr2'],
        deadLine: '2',
        done: false
    },
    {
        id: 5,
        category: 'uni',
        title: 'meeting',
        subTasks: ['dr1', 'dr2'],
        deadLine: '2',
        done: false
    }];



const users = [{id: 1, name:"safoora heidari", email:"safoora@gmail.com"},
    {id: 2, name:"fateme sahebi", email:"fateme@gmail.com"},
    {id: 3, name:"alireza abbasi", email:"alireza@gmail.com"},
    {id: 4, name:"majid heidari", email:"majid@gmail.com"}];


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