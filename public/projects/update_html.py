import re

def main():
    try:
        with open('index.html', 'r', encoding='utf-8') as f:
            html = f.read()

        # 1. Extract the timeline-items inner HTML
        match = re.search(r'<div class=\"timeline-items\">(.*?)</div>\s*</section>', html, re.DOTALL)
        if not match:
            print('Could not find timeline-items')
            return
        timeline_content = match.group(1)

        # 2. Remove the old video-portfolio section completely
        html = re.sub(r'\s*<section class=\"portfolio video-portfolio\" id=\"video-portfolio\" style=\"display: none;\">.*?</section>', '', html, flags=re.DOTALL)

        # 3. Replace the Video Editing service-box
        old_box = '''<div class="service-box" onclick="showVideoPortfolio()">
                    <div class="service-info">
                        <h4>Video Editing</h4>
                        <p>Turn raw footage into compelling stories with professional editing that
                            enhances every frame.
                        </p>
                    </div>
                </div>'''

        new_box = f'''<div class="service-box video-editing-box" onclick="toggleAccordion(this, event)">
                    <div class="service-info">
                        <h4>Video Editing</h4>
                        <p>Turn raw footage into compelling stories with professional editing that
                            enhances every frame.
                        </p>
                    </div>
                    <div class="accordion-content-wrapper">
                        <div class="accordion-content">
                            <div class="scroll-timeline-container">
                                <div class="scroll-dot"></div>
                                <div class="scroll-line-bg"></div>
                                <div class="scroll-line-fill" id="scroll-line-fill"></div>
                            </div>
                            <div class="timeline-items">
                                {timeline_content}
                            </div>
                        </div>
                    </div>
                </div>'''

        if old_box in html:
            html = html.replace(old_box, new_box)
            with open('index.html', 'w', encoding='utf-8') as f:
                f.write(html)
            print('Successfully updated index.html')
        else:
            print('Could not find the target old_box exactly, skipping replace')

    except Exception as e:
        print(f"Error: {e}")

if __name__ == '__main__':
    main()
