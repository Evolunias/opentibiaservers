import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-create-account');
}

export default function ZezeniaOnlineCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-create-account" />;
}
