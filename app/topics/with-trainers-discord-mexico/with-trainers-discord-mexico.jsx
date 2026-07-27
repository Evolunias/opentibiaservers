import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-discord-mexico');
}

export default function WithTrainersDiscordMexicoKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-discord-mexico" />;
}
