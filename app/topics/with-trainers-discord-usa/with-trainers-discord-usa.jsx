import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-discord-usa');
}

export default function WithTrainersDiscordUsaKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-discord-usa" />;
}
