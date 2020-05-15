<template>
  <div id="nutrisoft">
    <div class="container text-center">
      <div class="row">
        <div class="col-12 col-sm-12">
          <img
            alt="NutriSoft logo"
            width="300px"
            src="./../assets/logo-nutrisoft.png"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-sm-12 col-md-12 col-xl-12">
          <div class="table-responsive">
            <table class="table table-bordered table-hover">
              <thead>
                <th>Contenido</th>
                <th>Limites de Contenido</th>
                <th>3º ETAPA</th>
                <th>¿Cumple Ley de Alimentos?</th>
              </thead>
              <tbody>
                <tr>
                  <td>Calorias</td>
                  <td>{{ limites.calorias }} (kcal/100g)</td>
                  <td>
                    <input
                      class="text-center"
                      type="number"
                      min="0"
                      v-model="form.calorias"
                    />
                  </td>
                  <td v-if="checkCalorias">
                    <span class="badge badge-danger">Rechazado</span>
                  </td>
                  <td v-else>
                    <span class="badge badge-success">Aprobado</span>
                  </td>
                </tr>
                <tr>
                  <td>Sodio</td>
                  <td>{{ limites.sodio }} (mg/100g)</td>
                  <td>
                    <input
                      class="text-center"
                      type="number"
                      min="0"
                      v-model="form.sodio"
                    />
                  </td>
                  <td v-if="checkSodio">
                    <span class="badge badge-danger">Rechazado</span>
                  </td>
                  <td v-else>
                    <span class="badge badge-success">Aprobado</span>
                  </td>
                </tr>
                <tr>
                  <td>Azucares</td>
                  <td>{{ limites.azucares }} (g/100g)</td>
                  <td>
                    <input
                      class="text-center"
                      type="number"
                      min="0"
                      v-model="form.azucares"
                    />
                  </td>
                  <td v-if="checkAzucares">
                    <span class="badge badge-danger">Rechazado</span>
                  </td>
                  <td v-else>
                    <span class="badge badge-success">Aprobado</span>
                  </td>
                </tr>
                <tr>
                  <td>Grasas Saturadas</td>
                  <td>{{ limites.grasasSaturadas }} (g/100g)</td>
                  <td>
                    <input
                      class="text-center"
                      type="number"
                      min="0"
                      v-model="form.grasasSaturadas"
                    />
                  </td>
                  <td v-if="checkGrasasSaturadas">
                    <span class="badge badge-danger">Rechazado</span>
                  </td>
                  <td v-else>
                    <span class="badge badge-success">Aprobado</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NutriSoft",
  data() {
    return {
      form: {
        calorias: 0,
        sodio: 0,
        azucares: 0,
        grasasSaturadas: 0,
      },
      limites: {
        calorias: 275,
        sodio: 400,
        azucares: 10,
        grasasSaturadas: 4,
      },
    };
  },
  computed: {
    checkCalorias() {
      return this.form.calorias > 275;
    },
    checkSodio() {
      return this.form.sodio > 400;
    },
    checkAzucares() {
      return this.form.azucares > 10;
    },
    checkGrasasSaturadas() {
      return this.form.grasasSaturadas > 4;
    },
  },
};
</script>
