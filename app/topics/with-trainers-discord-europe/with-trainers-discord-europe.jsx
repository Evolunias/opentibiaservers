import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-discord-europe');
}

export default function WithTrainersDiscordEuropeKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-discord-europe" />;
}
