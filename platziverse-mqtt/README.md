# platziverse-mqtt

## `agent/connected`

``` js
{
  agent: {
    uuid, // auto generated
    username, // define for config
    name, // define for config
    host, // get of operaty system
    pid // get of process
  }
}
```

## `agent/disconnnected`

``` js
{
  agent: {
    uuid
  }
}
```

## `agent/message`

``` js
{
  agent,
  metrics: [
    {
      type,
      value
    }
  ],
  timestamp // generate when created the message
}
```