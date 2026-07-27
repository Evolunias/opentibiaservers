import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-vip');
}

export default function ZuneraOtVipKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-vip" />;
}
