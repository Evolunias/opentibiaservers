import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-discord-poland');
}

export default function WithTrainersDiscordPolandKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-discord-poland" />;
}
