import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-create-account');
}

export default function YurotsCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="yurots-create-account" />;
}
