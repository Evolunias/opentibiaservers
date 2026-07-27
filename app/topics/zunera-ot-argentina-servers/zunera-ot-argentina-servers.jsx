import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-argentina-servers');
}

export default function ZuneraOtArgentinaServersKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-argentina-servers" />;
}
