ServerEvents.commandRegistry(event => {
  const { commands: Commands, arguments: Arguments } = event
 
  event.register(
      Commands.literal('gac')
          .requires(src => src.hasPermission(4))
          .executes(ctx => {
              let server = ctx.source.getServer()
              if (server.runCommandSilent('curios add belt @p 1') &&
                  server.runCommandSilent('curios add ring @p 2') &&
                  server.runCommandSilent('curios add amulet @p 1') &&
                  server.runCommandSilent('curios add necklace @p 2') &&
                  server.runCommandSilent('curios remove bundle @p 2') &&
                  server.runCommandSilent('curios add amulet @p 1') &&
                  server.runCommandSilent('curios add bracelet @p 1') &&
                  server.runCommandSilent('curios add curio @p 2') &&
                  server.runCommandSilent('curios add charm @p 2') &&
                  server.runCommandSilent('curios add curio @p 3')) 
                  return 1
              else {
                  ctx.source.player.tell(Text.green('Galaxy Addon Curios Agregados!'))
                  return 0
              }
          })
  )
})

