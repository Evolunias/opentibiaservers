import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-brazil-server');
}

export default function ZuneraOtBrazilServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-brazil-server" />;
}
