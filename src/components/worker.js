// Simulated database stored as JSON
const database = {
    "users": [
      {
        "id": "44be",
        "email": "rania12@gmail.com",
        "password": "123",
        "name": "rania"
      },
      {
        "id": "7937",
        "email": "ghassenchaari55@gmail.com",
        "password": "123",
        "name": "ghassen"
      }
    ],
    "restaurants": [
      {
        "name": "FarmSlice",
        "localisation": "kaid mohamed 3klm",
        "contact": "96256788",
        "id": "2dce"
      },
      {
        "id": "93a4",
        "name": "sishbish",
        "localisation": "trik tunis 1.5klm",
        "contact": "45877632"
      },
      {
        "id": "a6f7",
        "name": "tonton",
        "localisation": "nasriya",
        "contact": "56478951"
      },
      {
        "id": "c2eb",
        "name": "hsouna",
        "localisation": "hay l ons",
        "contact": "96256788"
      },
      {
        "name": "haj tayeb",
        "localisation": "num5",
        "contact": "45871452",
        "id": "26be"
      }
    ]
  };
  
  async function handleRequest(request) {
    const { method, url } = request
  
    if (method === 'POST' && url.endsWith('/signup')) {
      const requestBody = await request.json()
      const { name, email, password } = requestBody
  
      // Validate input (e.g., ensure required fields are provided, validate email format)
  
      // Check if email is already registered
      if (isEmailRegistered(email)) {
        return new Response('Email is already registered', { status: 409 })
      }
  
      // Generate unique ID for the new user
      const userId = generateUniqueId()
      
      // Create a new user object
      const newUser = { id: userId, name, email, password }
  
      // Add the new user to the database
      database.users.push(newUser)
  
      return new Response('User account created', { status: 200 })
    }
  
    if (method === 'POST' && url.endsWith('/login')) {
      const requestBody = await request.json()
      const { email, password } = requestBody
  
      // Find user by email and password
      const user = database.users.find(user => user.email === email && user.password === password)
  
      if (user) {
        return new Response('Login successful', { status: 200 })
      } else {
        return new Response('Invalid email or password', { status: 401 })
      }
    }
  
    return new Response('Not found', { status: 404 })
  }
  
  // Function to check if an email is already registered
  function isEmailRegistered(email) {
    return database.users.some(user => user.email === email)
  }
  
  // Function to generate a unique ID
  function generateUniqueId() {
    return Math.random().toString(36).substr(2, 9);
  }
  
  // Export the fetch function
  addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
  });
  