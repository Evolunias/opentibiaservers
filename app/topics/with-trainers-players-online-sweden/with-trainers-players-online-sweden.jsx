import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-players-online-sweden');
}

export default function WithTrainersPlayersOnlineSwedenKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-players-online-sweden" />;
}
