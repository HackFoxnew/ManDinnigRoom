const user = {
  languaje: "",
  level: 0

}

function OnLoad() {
  const app = new PIXI.Application({ background: '#1099bb' })

  document.body.appendChild(app.view)


  const StyleMenuPresentation = new PIXI.TextStyle({
    dropShadow: true,
    dropShadowColor: "#424242",
    dropShadowDistance: 10,
    fill: [
      "#ffff00",
      "#bdbd00"

    ],
    fillGradientType: 1,
    fontFamily: "\"Lucida Console\", Monaco, monospace",
    fontWeight: 900,
    lineJoin: "bevel",
    miterLimit: 16,
    stroke: "#ffffff",
    strokeThickness: 1
  });


  const StyleLanguaje = new PIXI.TextStyle({
    fontFamily: "Tahoma",
    fontSize: 30,
    fontVariant: "small-caps",
    fontWeight: 900
  });


  const MenuTextPresetation = new PIXI.Text("Choose your language", StyleMenuPresentation)
  const INGLES = new PIXI.Text("INGLES", StyleLanguaje)
  const ESPANOL = new PIXI.Text("ESPAÑOL", StyleLanguaje)

  MenuTextPresetation.x = window.screen.width() / 2;
  MenuTextPresetation.y = window.screen.height() / 1.5;

  INGLES.x = window.screen.width() / 2 - 100;
  INGLES.y = window.screen.height() / 1.5 - 100;
  ESPANOL.x = window.screen.width() / 2 - 100;
  ESPANOL.y = window.screen.height() / 1.5 + 50;





}
