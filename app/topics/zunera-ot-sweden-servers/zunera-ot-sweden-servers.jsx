import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-sweden-servers');
}

export default function ZuneraOtSwedenServersKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-sweden-servers" />;
}
