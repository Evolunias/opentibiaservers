import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-discord-canada');
}

export default function WithTrainersDiscordCanadaKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-discord-canada" />;
}
