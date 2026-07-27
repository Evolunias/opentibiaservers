import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-login');
}

export default function ZuneraOtLoginKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-login" />;
}
