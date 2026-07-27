import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-brazil-servers');
}

export default function ZuneraOtBrazilServersKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-brazil-servers" />;
}
