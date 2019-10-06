<template>
  <section>
    <div>
      <div class="round" style="font-size: 14px;">
        <span id="round">1</span>
        <span>/</span>
        <span id="year">1</span>
      </div>
    </div>
    <div class="oil_refined_threshold">
      <div>
        <table>
          <tbody>
            <tr>
              <th />
              <th>L</th>
              <th>M</th>
              <th>H</th>
            </tr>
            <tr style="background-color: orange;">
              <td style="background-color: orange;">
                O
              </td>
              <td>
                4
              </td>
              <td>
                5
              </td>
              <td>
                6
              </td>
            </tr>
            <tr style="background-color: dodgerblue; color: white;">
              <td style="background-color: dodgerblue;">
                B
              </td>
              <td>
                4
              </td>
              <td>
                5
              </td>
              <td>
                6
              </td>
            </tr>
            <tr style="background-color: silver;">
              <td style="background-color: silver;">
                S
              </td>
              <td>
                4
              </td>
              <td>
                5
              </td>
              <td>
                6
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div id="valuations">
      <dl>
        <li>VAL0</li>
        <li>VAL1</li>
        <li>VAL2</li>
        <li>VAL3</li>
      </dl>
    </div>
    <div id="turn_order">
      <ol>
        <li>P0</li>
        <li>P1</li>
        <li>P2</li>
        <li>P3</li>
      </ol>
      <ol>
        <li><svg style="width: 20; height: 20;" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="yellowgreen" /></svg></li>
        <li>Order1</li>
        <li>Order2</li>
        <li>Order3</li>
      </ol>
    </div>
    <div id="upgrade">
      <ul>
        <li>RM</li>
        <li>Gov</li>
        <li>C&amp;O</li>
        <li>Ma</li>
        <li>HR</li>
      </ul>
    </div>
    <div id="government_areas">
      <div id="government_area_0">
        <svg style="width: 200; height: 100;" viewBox="0 0 200 100">
          <rect x="0" y="0" width="200" height="100" fill="silver" />
        </svg>
      </div>
      <div id="government_area_1">
        <svg style="width: 200; height: 100;" viewBox="0 0 200 100">
          <rect x="0" y="0" width="200" height="100" fill="silver" />
        </svg>
      </div>
      <div id="government_area_2">
        <svg style="width: 200; height: 100;" viewBox="0 0 200 100">
          <rect x="0" y="0" width="200" height="100" fill="silver" />
        </svg>
      </div>
      <div id="government_area_3">
        <svg style="width: 200; height: 100;" viewBox="0 0 200 100">
          <rect x="0" y="0" width="200" height="100" fill="silver" />
        </svg>
      </div>
    </div>
    <div id="machine_shop">
      <p>under construction</p>
    </div>
    <div id="tank_shop">
      <p>under construction</p>
    </div>
    <div id="actions">
      <ul>
        <li>Action + CM</li>
        <li>Action + RM1</li>
        <li>Action + RM2</li>
        <li>Action + RM3</li>
      </ul>
    </div>
    <div id="contacts">
      <p>Contacts: under construction</p>
    </div>
    <div id="orders">
      <p>Orders: under construction</p>
    </div>
    <div id="players">
      <div id="player1">
        <p>p1</p>
        <div id="player1_oiltanks">
          <dl style="display: flex;">
            <dt>H(2)</dt>
            <dd><p style="width: 2em; text-align: center; background-color: orange;">3</p></dd>
            <dt>M(1)</dt>
            <dd></dd>
            <dt>L(0)</dt>
            <dd></dd>
            <dt>G(0)</dt>
            <dd></dd>
          </dl>
        </div>
        <div id="player1_pipelines">
        </div>
      </div>
      <div id="player2">
        <p>p1</p>
        <div id="player2_oiltanks">
          <dl style="display: flex;">
            <dt>H(2)</dt>
            <dd><p style="width: 2em; text-align: center; background-color: orange;">3</p></dd>
            <dt>M(1)</dt>
            <dd></dd>
            <dt>L(0)</dt>
            <dd></dd>
            <dt>G(0)</dt>
            <dd></dd>
          </dl>
        </div>
        <div id="player2_pipelines">
        </div>
      </div>
      <div id="player3">
        <p>p1</p>
        <div id="player3_oiltanks">
          <dl style="display: flex;">
            <dt>H(2)</dt>
            <dd><p style="width: 2em; text-align: center; background-color: orange;">3</p></dd>
            <dt>M(1)</dt>
            <dd></dd>
            <dt>L(0)</dt>
            <dd></dd>
            <dt>G(0)</dt>
            <dd></dd>
          </dl>
        </div>
        <div id="player3_pipelines">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import colors from '~/mixins/colors'

export default {
  name: 'GAME/:id',
  components: {
  },
  mixins: [
    colors
  ],
  data () {
    return {
      tiles: []
    }
  },
  mounted () {
    this.$store.commit('pipes/shuffle')
    this.tiles = Object.assign(this.tiles, this.$store.state.pipes.pipes[0])
    this.$store.commit('pipes/get')
  }
}
</script>

<style>

</style>
