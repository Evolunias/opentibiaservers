import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-players-online-europe');
}

export default function WithTrainersPlayersOnlineEuropeKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-players-online-europe" />;
}
