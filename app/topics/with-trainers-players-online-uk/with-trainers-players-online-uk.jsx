import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-players-online-uk');
}

export default function WithTrainersPlayersOnlineUkKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-players-online-uk" />;
}
