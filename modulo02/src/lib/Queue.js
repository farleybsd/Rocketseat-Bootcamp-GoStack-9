import Bee from 'bee-queue'
import CancellatiomMail from '../app/jobs/CancellationMail'
import redisconfig from '../config/redis'

const jobs = [CancellatiomMail]

class Queue {

    constructor() {
        this.queues = {}

        this.init()
    }

    init() {

        jobs.forEach(({ Key, handle }) => {
            this.queues[Key] = {
                bee: new Bee(Key, {
                    redis: redisconfig,
                }),
                handle,
            }

        })

    }

    add(queue, job) {

        return this.queues[queue].bee.createJob(job).save()

    }

    processQueue() {

        jobs.forEach(job => {

            const { bee, handle } = this.queues[job.Key]

            bee.on('failed', this.handleFailure).process(handle)

        })

    }

    handleFailure(job, erro) {

        console.log(`Queue ${job.queue.name}: FAILED`, erro)

    }

}

export default new Queue()