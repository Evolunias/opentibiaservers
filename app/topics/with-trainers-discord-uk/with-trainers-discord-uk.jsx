import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-discord-uk');
}

export default function WithTrainersDiscordUkKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-discord-uk" />;
}
