const { ServiceProvider } = require("@adonisjs/fold");

class AuditProvider extends ServiceProvider {
  register () {
    this.app.singleton("Adonis/Traits/Auditable", () => {
      const Auditable = require("../src/Traits/Auditable");
      return new Auditable();
    });
    this.app.alias("Adonis/Traits/Auditable", "Auditable");
  }

  boot () {
    const Context = this.app.use("Adonis/Src/HttpContext");
    const Auditable = this.app.use("Auditable");

    // add ctx to datagrid
    Context.onReady(ctx => {
      Auditable.ctx = ctx;
    });
  }
}

module.exports = AuditProvider;
