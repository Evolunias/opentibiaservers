import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-discord-latin-america');
}

export default function WithTrainersDiscordLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-discord-latin-america" />;
}
