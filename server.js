import { createServer, Model, Response } from "miragejs"

createServer({
  models:{
    vans: Model,
    users: Model
  },
  seeds(server){
    server.create( "van", {id: "2",
    name: "Wilderness Wanderer",
    price: 75,
    description: "The Wilderness Wanderer is perfect for those who crave adventure. With off-road capabilities, a rooftop tent, and ample storage, it’s ready to take you anywhere.",
    imageUrl: "https://silver-bird.static.domains/vans/van-6.jpg",
    type: "adventure",
    hostId: "124"
  })
server.create("van",   {
  id: "3",
  "name": "Urban Escape",
  price: 55,
  description: "The Urban Escape is a compact and efficient van ideal for city trips. It includes a comfortable sleeping area, kitchenette, and plenty of space for your gear.",
  imageUrl: "https://silver-bird.static.domains/vans/van-7.jpg",
  type: "city",
  hostId: "125"
})

 server.create("van",  {
  id: "4",
  name: "Mountain Climber",
  price: 80,
  description: "The Mountain Climber is equipped with everything you need for high-altitude adventures. Featuring a reinforced chassis, climbing gear storage, and a powerful engine.",
  imageUrl: "https://silver-bird.static.domains/vans/van-4.jpg",
  type: "adventure",
  hostId: "123"
})
server.create("van",   {
  id: "5",
  name: "Beach Bum",
  price: 65,
  description: "The Beach Bum is designed for those who love the sea. With a surfboard rack, outdoor shower, and cozy sleeping quarters, it’s the perfect beach getaway vehicle.",
  imageUrl: "https://silver-bird.static.domains/vans/van-1.jpg",
  type: "leisure",
  hostId: "123"
})
server.create("van",   {
  id: "6",
  name: "Family Traveler",
  price: 70,
  description: "The Family Traveler is spacious and comfortable, ideal for family trips. It includes bunk beds, a full kitchenette, and plenty of room for the kids.",
  imageUrl: "https://silver-bird.static.domains/vans/van-3.jpg",
  type: "family",
  hostId: "123"
})
server.create("user", { id: "123", email: "b@b.com", password: "p123", name: "Bob" })
    },

    routes() {
        this.namespace = "api"
        this.logging = false
        // this.timing = 2000  // => mock a 2 second delay in server response

        this.get("/vans", (schema, request) => {
            // return new Response(400, {}, {error: "Error fetching data"})
            return schema.vans.all()
        })

        this.get("/vans/:id", (schema, request) => {
            const id = request.params.id
            return schema.vans.find(id)
        })

        this.get("/host/vans", (schema, request) => {
            // Hard-code the hostId for now
            return schema.vans.where({ hostId: "123" })
        })

        this.get("/host/vans/:id", (schema, request) => {
            // Hard-code the hostId for now
            const id = request.params.id
            return schema.vans.findBy({ id, hostId: "123" })
        })
        
        this.post("/login", (schema, request) => {
            const { email, password } = JSON.parse(request.requestBody)
            // ⚠️ This is an extremely naive version of authentication. Please don't
            // do this in the real world, and never save raw text passwords
            // in your database 😅
            const foundUser = schema.users.findBy({ email, password })
            if (!foundUser) {
                return new Response(401, {}, { message: "No user with those credentials found!" })
            }

            // At the very least, don't send the password back to the client 😅
            foundUser.password = undefined
            return {
                user: foundUser,
                token: "Enjoy your pizza, here's your tokens."
            }
        })
    }
})
