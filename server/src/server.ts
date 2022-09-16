import express, { json } from 'express'
import cors from 'cors'
import { PrismaClient } from '@prisma/client'
import { convertHourStringToMinute, convertMinutesToHourString } from './utils/hour-convertion'

const app = express()
const prisma = new PrismaClient()

app.use(json())
app.use(cors())

app.get('/games', async (request, response) => {
  const games = await prisma.game.findMany({
    include: {
      _count: {
        select: {
          ads: true
        }
      }
    }
  })

  return response.json(games)
})

app.get('/games/:id/ads', async (request, response) => {
  const gameId = request.params.id

  const ads = await prisma.ad.findMany({
    select: {
      id: true,
      name: true,
      yearsPlaying: true,
      weekDays: true,
      hourStart: true,
      hourEnd: true,
      useVoiceChannel: true,
    },
    where: {
      gameId
    },
    orderBy: {
      createdAt: 'desc'
    }
  })

  return response.json(ads.map(ad => {
    return  {
      ...ad,
      weekDays: ad.weekDays.split(','),
      hourStart: convertMinutesToHourString(ad.hourStart),
      hourEnd: convertMinutesToHourString(ad.hourEnd)
    }
  }))
});

app.post('/games/:id/ads', async (request, response) => {
  const gameId = request.params.id

  const { 
    name, 
    yearsPlaying, 
    discord, 
    weekDays, 
    hourStart, 
    hourEnd, 
    useVoiceChannel 
  } = request.body

  const ad = await prisma.ad.create({
    data: {
      gameId,
      name,
      yearsPlaying,
      discord,
      weekDays: weekDays.join(","),
      hourStart: convertHourStringToMinute(hourStart),
      hourEnd: convertHourStringToMinute(hourEnd),
      useVoiceChannel
    }
  }) 

  return response.status(201).json(ad);
});

app.get('/ads/:id/discord', async (request, response) => {
  const adId = request.params.id;

  const ad = await prisma.ad.findUniqueOrThrow ({
    select: {
      discord: true
    },
    where: {
      id: adId
    }
  })

  return response.json({ discord: ad.discord })
});

app.listen(3333)

console.log('Server is running in https://localhost:3333')
