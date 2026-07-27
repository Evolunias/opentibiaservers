import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-discord-north-america');
}

export default function WithTrainersDiscordNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-discord-north-america" />;
}
