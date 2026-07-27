import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-create-account');
}

export default function ZuneraOtCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-create-account" />;
}
