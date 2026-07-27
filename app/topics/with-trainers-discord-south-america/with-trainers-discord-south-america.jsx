import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-discord-south-america');
}

export default function WithTrainersDiscordSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-discord-south-america" />;
}
