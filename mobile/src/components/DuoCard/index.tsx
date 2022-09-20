import { Text, TouchableOpacity, View } from "react-native";
import { GameController } from "phosphor-react-native";

import { DuoInfo } from "../DuoInfo";
import { THEME } from "../../theme";
import { styles } from "./styles";

export interface DuoCardProps {
  id: string;
  name: string;
  yearsPlaying: number;
  weekDays: string[];
  hourStart: string;
  hourEnd: string;
  useVoiceChannel: boolean;
}

interface Props extends DuoCardProps {
  onConnect: () => void;
}

export function DuoCard({
  name,
  yearsPlaying,
  weekDays,
  hourStart,
  hourEnd,
  useVoiceChannel,
  onConnect,
}: Props) {
  return (
    <View style={styles.container}>
      <DuoInfo label="Nome" value={name} />
      <DuoInfo label="Tempo de jogo" value={`${yearsPlaying} anos`} />
      <DuoInfo
        label="Disponibilidade"
        value={`${weekDays.length} dias \u2022 ${hourStart} - ${hourEnd}`}
      />
      <DuoInfo
        label="Chamada de áudio"
        value={useVoiceChannel ? "Sim" : "Não"}
        valueColor={useVoiceChannel ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT}
      />

      <TouchableOpacity style={styles.button} onPress={onConnect}>
        <GameController size={20} color={THEME.COLORS.TEXT} />
        <Text style={styles.buttonTitle}>Conectar</Text>
      </TouchableOpacity>
    </View>
  );
}
