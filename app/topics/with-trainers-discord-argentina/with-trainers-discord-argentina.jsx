import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-discord-argentina');
}

export default function WithTrainersDiscordArgentinaKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-discord-argentina" />;
}
