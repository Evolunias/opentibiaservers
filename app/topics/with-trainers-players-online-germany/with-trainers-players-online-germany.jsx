import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-players-online-germany');
}

export default function WithTrainersPlayersOnlineGermanyKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-players-online-germany" />;
}
