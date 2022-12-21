import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: ['romantic-muskrat-8360-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username:
            'cm9tYW50aWMtbXVza3JhdC04MzYwJMpv6wCbZsBgQbemW9ZqYyuKTF6goqg6XkA',
          password:
            'Kqma0NGzfyCfT0awcQOJptU-gUgJf_kvM-yt4RjPgUO7JBMwiBZJ8vRTzH6-lxee2BiE2Q==',
        },
        ssl: true,
      },
    });
  }
  async onModuleDestroy() {
    await this.close();
  }
}
