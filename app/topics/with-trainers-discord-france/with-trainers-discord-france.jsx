import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-discord-france');
}

export default function WithTrainersDiscordFranceKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-discord-france" />;
}
