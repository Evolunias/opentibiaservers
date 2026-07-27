import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-players-online-poland');
}

export default function WithTrainersPlayersOnlinePolandKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-players-online-poland" />;
}
