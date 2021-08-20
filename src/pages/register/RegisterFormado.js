import { RegisterUser } from "./RegisterUser";

export function RegisterFormado() {
  return (
    <>
      <RegisterUser
        crp={<input name="CRP" type="number" placeholder="CRP" />}
        cpf={
          <input name="CPF" type="number" placeholder="CPF (Somente números)" />
        }
        time={
          <div class="column space time">
            <input type="radio" name="time" id="thirty" value="30" />
            <label for="thirty">Conversa de 30min</label>

            <input type="radio" name="time" id="fourtyfive" value="45" />
            <label for="fourtyfive">Conversa de 45min</label>

            <input type="radio" name="time" id="sixty" value="60" />
            <label for="sixty">Conversa de 60min</label>
          </div>
        }
        terapeutica={
          <div class="select_types">
            <label class="sr-only" for="types">
              Escolha uma linha terapêutica
            </label>
            <select name="type" id="types">
              <option value="" disabled selected>
                Linha terapêutica
              </option>
              <option value="type_psica">Psicanálise</option>
              <option value="type_jung">Junguiana</option>
              <option value="type_tcc">TCC</option>
              <option value="type_behav">Behaviorismo</option>
              <option value="type_gesta">Gestalt-terapia</option>
              <option value="type_human">Humanista</option>
            </select>
          </div>
        }
      />
    </>
  );
}
