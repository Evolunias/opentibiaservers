import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-germany-servers');
}

export default function ZuneraOtGermanyServersKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-germany-servers" />;
}
