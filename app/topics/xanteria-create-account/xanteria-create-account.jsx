import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-create-account');
}

export default function XanteriaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="xanteria-create-account" />;
}
