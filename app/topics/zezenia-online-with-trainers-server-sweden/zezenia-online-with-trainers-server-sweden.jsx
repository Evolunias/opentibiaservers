import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-with-trainers-server-sweden');
}

export default function ZezeniaOnlineWithTrainersServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-with-trainers-server-sweden" />;
}
